try {
    // código aquí ...
    throw new Error('Mi error personal');
}
catch(error){
    console.log('error:' ,error);
}
finally{
    console.log('Esto siempre se ejecuta');
}
