

exports.user = async (req, res) =>{
    try {
        const {username, password} = req.body
    const findUser = await User.findOne({username:username})

    if(findUser){
        res.status(400).json({
            msg: 'username already exist'
        })
    }
    const user = await new User ({
        username: username,
        password: password,
    }).save()
    res.status(200).json({
        msg: 'Data successfully inputed',
        data: user
    })
    } catch (error) {
      res.status(500).json({
          msg: 'internal server error'
      })  
    }
}