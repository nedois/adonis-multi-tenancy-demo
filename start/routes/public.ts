import router from '@adonisjs/core/services/router'

const CountriesController = () => import('#controllers/public/countries_controller')

// Public routes
router.group(() => {
  router.resource('countries', CountriesController).apiOnly()
})
