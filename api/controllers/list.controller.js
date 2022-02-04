const { get_suggestions, change_suggestion_state, remove_suggestion } = require('../suggestions')

exports.getList = async function(req, res, next) {
    console.log(`Requesting list type ${req.query.suggestion_state}`)
    return res.status(200).json(get_suggestions(req.query.suggestion_state))
}

exports.deleteSuggestion = async function(req, res, next) {
    console.log(`Deleting ${req.body.suggestion_id}`)
    remove_suggestion(req.body.suggestion_id)
    return res.status(200).json({ message: 'All good' })
}

exports.changeSuggestion = async function(req, res, next) {
    console.log(`changing ${req.body.suggestion_id} to ${req.body.suggestion_state}`)
    change_suggestion_state(req.body.suggestion_id, req.body.suggestion_state)
    return res.status(200).json({ message: 'All good' })
}