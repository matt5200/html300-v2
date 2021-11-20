export default {
  methods: {
    toggle(bool) {
      this.bool = !this.bool
      if (bool === true) {
        alert('Val of bool is ' + bool)
        return ''
      }
      alert('Val of bool is ' + bool)
      return 'border border-danger border-5';
    }
  }
}
