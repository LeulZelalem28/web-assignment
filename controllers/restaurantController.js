const asyncHandler = require('express-async-handler')
const Restaurant = require("../model/restaurantModel")
//@desc GET all restaurants
//@route GET /api/restaurants
//@access public
const getAllRestaurants = asyncHandler(async (req, res) =>{
    const restautrants = Restaurant.find()
    res.status(200).json({message: "getting all restaurants"})
})

//@desc get restaurants by address and category filter
//@route POST /api/restaurants/filter
//@access public
const filterRestaurants = asyncHandler(async (req, res) =>{
    const { location, category } = 
    res.status(200).json({message: `restaurants filtered by location :${location} and by category: ${category}`})
})

//@desc search restaurants
//@route POST /api/restaurants/search
//@access public
const searchRestaurants = asyncHandler(async (req, res) =>{
    res.status(200).json({message: "getting all restaurants"})
})

//@desc POST create a restaurant 
//@route POST /api/restaurants
//@access public
const createRestaurant = asyncHandler(async (req, res) =>{
    res.status(200).json({message: "create a restaurant"})
})

//@desc  update a restaurant
//@route PUT /api/restaurants/:id
//@access public
const updateRestaurant = asyncHandler(async (req, res) =>{
    res.status(200).json({message: "update restaurant"})
})

//@desc delete a restaurant
//@route DELETE /api/restaurants/:id
//@access public
const deleteRestaurant = asyncHandler(async (req, res) =>{
    res.status(200).json({message: "delete restaurant"})
})

//@desc GET a single restaurant
//@route GET /api/restaurants/:id
//@access public
const getRestaurant = asyncHandler(async (req, res) =>{
    res.status(200).json({message: "delete restaurant"})
})


module.exports = { getAllRestaurants, filterRestaurants, searchRestaurants, createRestaurant, updateRestaurant, deleteRestaurant, getRestaurant}