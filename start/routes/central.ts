import router from '@adonisjs/core/services/router'

const CountriesController = () => import('#controllers/central/countries_controller')

// Central routes
router.group(() => {
  router.resource('countries', CountriesController).apiOnly()
})
