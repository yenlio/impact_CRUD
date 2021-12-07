const mongoose = require('mongoose')
const Task = require('../model/index')

exports.getItem=async function (req, res) {
    try {
        const a=await Task.find({})
        res.send(a)
        
    } catch (error) {
        res.send({
            message:"error"
        })
    }
    
}

exports.getOne = async function (req, res) {
    try {
        const id = req.params.id
        console.log(id, "iddd");
        const respon = await Task.findById(id)
        let arr = []
        arr.push(respon)
        res.send({ arr })
    } catch (error) {
        res.send({
            message: "error"
        })

    }

}

exports.addItem=async function (req, res) {
    try {
        const data=req.body
        const newData= new Task(data)
        const a=await newData.save({})
        res.send({
            a,id:a._id
        })
        
    } catch (error) {
        res.send({
            message:"error"
        })
    }
    
}
exports.deleteItem = async function (req, res) {
    try {
        const id = req.params.id
        const a = await Task.findByIdAndDelete(id)
        res.send({
            message: "thanh cong"
        })

    } catch (error) {
        res.send({
            message: "error"
        })

    }

}
exports.updateItem = async function (req, res) {
    try {
        const id = req.params.id
        const data = req.body
        const a = await Task.findByIdAndUpdate(id, data)
        res.send({a,id: a._id})

    } catch (error) {
        res.send({
            message: "error"
        })

    }

}

exports.paginationItem = async function (req, res) {
    try {
        const activePage = parseInt(req.query.activePage)
        const limit = parseInt(req.query.limit)
        const skip = (activePage - 1) * limit

        const pagi = await Task.find({}).skip(skip).limit(limit)
        const all = await Task.countDocuments()
        const totalPage = Math.ceil(all / limit)
        res.send({
            pagi,
            totalPage,
            all
        })

    } catch (error) {
        res.send({
            message: "error"
        })

    }

}


exports.searchItem = async function (req, res) {
    try {
        const activePage = parseInt(req.query.activePage)
        const limit = parseInt(req.query.limit)
        const skip = (activePage - 1) * limit
        const q = req.query.q

        const search = await Task.find({ name: { $regex: q, $options: 'i' } }).skip(skip).limit(limit)
        const all = await Task.countDocuments({ name: { $regex: q, $options: 'i' } })
        const totalPage = Math.ceil(all / limit)
        res.send({
            search,
            totalPage,
            all
        })

    } catch (error) {
        res.send({
            message: "error"
        })

    }

}

