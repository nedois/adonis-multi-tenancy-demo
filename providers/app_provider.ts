export default class AppProvider {
  async boot() {
    await import('#extensions/request')
  }
}
