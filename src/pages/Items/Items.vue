<template>
  <div id="title-copies" class="title-copies page">

    <div class="flex flex-align--center">

      <!-- heading -->
      <h2
        class="sub-title flex-grow--1 margin-right--1"
        v-text="'List of copies'" />

      <!-- return btn -->
      <button-item
        class="btn--small flex-grow--0"
        @click="$router.go(-1)"
        name="return-button"
        text="< Return"
        id="return-button" />

    </div>

    <!-- spinner -->
    <spinner
      v-if="loading" />

    <!-- alert -->
    <alert
      v-if="!items.length && !errorMessage && !loading"
      type="info"
      content="No copies..." />

    <!-- error alert -->
    <alert
      v-if="errorMessage.length"
      type="error"
      :content="errorMessage" />

    <!-- item add form -->
    <item-form
      v-if="addFormVisible"
      @submit="addItem"
      @cancel="addFormVisible = false"
      :label="'Add copy'" />

    <!-- item edit form -->
    <item-form
      v-if="editFormVisible"
      :data="itemToEdit"
      @submit="editItem"
      @cancel="editFormVisible = false"
      :label="'Edit copy'" />

    <!-- items list -->
    <items-list
      v-if="items.length"
      :items="items"
      @remove="removeItem"
      @edit="itemToEdit = $event; editFormVisible = true" />

    <!-- add item btn -->
    <button-item
      @click="addFormVisible = true"
      name="add-item-button"
      text="Add new"
      id="add-item-button" />

  </div>
</template>

<script>
import AuthMixin from '@/mixins/authMixin'
import Alert from '@/components/UI/Alert'
import ItemsList from '@/components/ItemsList'
import Spinner from '@/components/UI/Spinner'
import ButtonItem from '@/components/UI/Button'
import ItemForm from '@/components/ItemForm'

import { mapActions } from 'vuex'

export default {
  name: 'Items',
  mixins: [AuthMixin],
  data: () => ({
    loading: false,
    errorMessage: '',
    itemToEdit: null,
    editFormVisible: false,
    addFormVisible: false
  }),
  computed: {
    items () { return this.$store.state.items }
  },
  methods: {
    ...mapActions(['fetchItems', 'addItemRequest', 'removeItemRequest', 'updateItemRequest']),

    async removeItem (id) {
      this.loading = true
      this.errorMessage = ''
      try {
        await this.removeItemRequest(id)
      } catch (err) {
        this.errorMessage = err.message
      }
      this.loading = false
    },

    async addItem (form) {
      this.addFormVisible = false
      this.loading = true
      this.errorMessage = ''
      try {
        await this.addItemRequest({ purchaseDate: form.purchaseDate, status: form.status, titleId: this.$route.params.titleId })
      } catch (err) {
        this.errorMessage = err.message
      }
      this.loading = false
    },

    async editItem (form) {
      this.editFormVisible = false
      this.loading = true
      this.errorMessage = ''
      try {
        await this.updateItemRequest({ ...form })
      } catch (err) {
        this.errorMessage = err.message
      }
      this.loading = false
    }

  },
  async created () {
    this.loading = true
    this.errorMessage = ''
    try {
      if (!this.$route.params.titleId) throw new Error('No title selected')
      else await this.fetchItems(this.$route.params.titleId)
    } catch (err) {
      this.errorMessage = err.message
    }
    this.loading = false
  },
  components: { Alert, ItemsList, Spinner, ButtonItem, ItemForm }
}
</script>
