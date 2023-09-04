const {Router} = require ("express")
// const getSubCategories = require ("../../handlers/subcategories/subCategoriesHandler")
const handlerFilterSubCat = require ("../../handlers/subcategories/filterSubCat")

const subCategories = Router()

// subCategories.get("/", getSubCategories)
subCategories.get("/filtersubcat", handlerFilterSubCat)

module.exports = subCategories