module.exports={
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height:{
                "1/10":"10%",
                "9/10":"90%",
            }
        },
    },
    variants: {
        extend: {
            borderWidth: ['hover']
        },
    },
    plugins: [],
}