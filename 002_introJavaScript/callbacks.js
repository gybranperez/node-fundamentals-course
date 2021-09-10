const getUserById = (id, callback) => {
    const user = {
        id,
        name: "G"
    };

    setTimeout( () => {
        callback(user)
    } , 1500);
}

getUserById( 10 , ( user ) => {
    console.log( user.id );
    console.log( user.name.toUpperCase() );
});