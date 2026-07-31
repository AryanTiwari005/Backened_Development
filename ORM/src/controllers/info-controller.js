const info = (req, res) => {
    res.json({  
        success: true,
        name: "ORM",
        error: null,
        data:{}
    })
}

export default info;