exports.smartTrim=(str,length,delim,appendix)=>{
    if (str.length<=length) 
        return str
    let trimedStr = str.substr(0,length+delim.length)
    const lastDelimIndex = trimedStr.lastIndexOf(delim)
    if (lastDelimIndex>=0) {
        trimedStr = trimedStr.substr(0,lastDelimIndex)
    }
    if (trimedStr){trimedStr+=appendix}
    return trimedStr
}