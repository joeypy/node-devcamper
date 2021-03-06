const express =  require('express')
const { 
    getAllBootcamps, 
    getBootcamp, 
    postBootcamp, 
    updateBootcamp, 
    deleteBootcamp,
    getBootcampsInRadius
} = require('./../controllers/bootcamps')

// Include other resource routers
const courseRouter = require('./courses')

const router =  express.Router()

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter)

// Routes
router
    .route('/radius/:zipcode/:distance')
    .get(getBootcampsInRadius)

router
    .route('/')
    .get(getAllBootcamps)
    .post(postBootcamp)

router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp)


 
module.exports = router