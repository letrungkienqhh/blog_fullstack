import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCookie } from '../../actions/auth'
import { create, deleteTag, getTags } from '../../actions/tag'

const styles={
    wrapper:'',
    button:'text-xl bg-blue-500 p-2 rounded-md hover:cursor-pointer',
    inputContainer:'grid bg-grey-200 space-x-2 border-4 justify-between items-center w-1/2',
    label:'text-2xl font-bold p-2',
    container:'flex',
    tagButton:'bg-blue-700 text-white hover:cursor-pointer rounded-md m-2 p-2'
}
 const tag = () => {
    const [values,setValues]=useState({
        name:'',
        error:false,
        success:false,
        tags:[],
        removed:false,
        reload:false
    })
    const {name,error,success,tags,removed,reload} = values
    const token=getCookie('token')
    useEffect(()=>{
        loadtags()
    },[reload])

    const loadtags =()=>{
        getTags().then((data)=>{
            if (data.error){
                console.log(data.error)
                setValues({ ...values, error: data.error,success: false})
            }
            else{
                setValues({ ...values,tags:data})
            }
        })
    }
    

    const showtags =()=>{
        return tags.map((c,i)=>{
            return (
                    <div className={styles.tagButton} onDoubleClick={()=>removeConfirm(c.slug) } title='Double click to delete'>
                        <Link href={`/${c.slug}`} >
                            <a>{c.slug}</a>
                        </Link>
                    </div>
            )
        })    
        }

    const removeConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this tag?');
        if (answer) {
          
            removetag(slug)
        }
    };
    
    const removetag = slug => {
        console.log('delete', slug);
        deleteTag(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }
        });
    };

    const handleChange = (e)=>{
        setValues({...values,name:e.target.value,error:false,success:false,removed:''})
    }
    const handleSubmit=(e)=>{
        
        console.log(`created tag ${name}`)

        e.preventDefault();
 
        create({ name }, token).then((data) => {
            console.log(data)
            if (data.error) {
                setValues({ ...values, error: 'da co loi xay ra. Vui long nhap lai', success: false });
             } else {
                 setValues({ ...values, error: false, success: true, name: '',reload: !reload });
             }
        });
    }
    const showError = () => (error ? <div className="bg-red-500 text-xl">{error}</div>:'')
    const showSuccess = () => (success ? <div className="bg-green-500 text-xl">Added tag successfully</div> :'')
    const showRemoved =() => (removed ? <div className="bg-blue-500 text-xl">Removed successfully</div>:'')
    const newtagForm=()=>(
        <div className={styles.wrapper}>
               
                <div className={styles.inputContainer}>
                    <h3 className={styles.label}>tag</h3>
                    <input value={name} type="text" required onChange={handleChange}></input>
                </div>
              
        
           
            <div className='flex space-x-5'>
                <button className={styles.button} onClick={handleSubmit}>
                    submit
                    
                </button>
                {showError()}
                {showSuccess()}
                {showRemoved()}
            </div>
           
            {showtags()}
          
        </div>
    )
   return (

     <> 
       
        {newtagForm()}

        
     
       
     </>
   )
 }
 
 export default tag