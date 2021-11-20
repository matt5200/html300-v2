export default {
  data: {
    active: 1
  },
  methods: {
     methods: {
       toggle() {
         alert('test')
         this.isActive = !this.isActive;
         return this.isActive;
       }
     }
  }
}
