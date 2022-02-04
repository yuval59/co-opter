//--------------------------------\\
//                                \\
//      authentication server     \\
//                                \\
//--------------------------------\\

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.post('/api/getList', (req, res) => {
    
    return res.status(200).json(get_suggestions(req.body.list_type))

})