<template>
  <va-card title="Returned">
    <div class="row align--center mb-1">
      <div class="flex xs12 sm6">
        <va-input
          class="ma-0"
          :value="term"
          placeholder="Search by return ID"
          @input="search"
          removable
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>
    </div>

    <va-data-table
      :fields="fields"
      :data="filteredData"
      :loading="loading"
      hoverable
      no-pagination
    >
      <template slot="actions" slot-scope="props">
        <va-button flat small color="gray" @click="edit(props.rowData)" class="ma-0">
          {{ $t('tables.edit') }}
        </va-button>

        <va-button flat small color="danger" @click="remove(props.rowData)" class="ma-0">
          {{ $t('tables.delete') }}
        </va-button>
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
import debounce from 'lodash/debounce'
import db from '../firestore/firebaseInit'

export default {
  data () {
    return {
      users: [],
      loading: false,
      term: null,
      mode: 0,
    }
  },
  computed: {
    fields () {
      return [{
        name: 'return_id',
        title: 'Return ID',
        width: '10%',
        sortField: 'return_id',
      }, {
        name: 'deployment_id',
        title: 'Deployment ID',
        width: '10%',
        sortField: 'deployment_id',
      }, {
        name: 'vehicle_id',
        title: 'Vehicle ID',
        width: '10%',
        sortField: 'vehicle_id',
      }, {
        name: 'operator_id',
        title: 'Operator ID',
        width: '10%',
        sortField: 'operator_id',
      }, {
        name: 'branch_id',
        title: 'Branch ID',
        width: '10%',
        sortField: 'branch_id',
      }, {
        name: 'return_date',
        title: 'Return date',
        width: '10%',
        sortField: 'return_date',
      }, {
        name: '__slot:actions',
        dataClass: 'text-right',
      }]
    },
    filteredData () {
      if (!this.term || this.term.length < 1) {
        return this.users
      }

      return this.users.filter(item => {
        return item.return_id.toLowerCase().startsWith(this.term.toLowerCase())
      })
    },
  },
  methods: {
    getStatusColor (status) {
      if (status === 'paid') {
        return 'success'
      }

      if (status === 'processing') {
        return 'info'
      }

      return 'danger'
    },
    resolveUser (user) {
      this.loading = true

      setTimeout(() => {
        const idx = this.users.findIndex(u => u.id === user.id)
        this.users.splice(idx, 1)
        this.loading = false

        this.showToast(this.$t('dashboard.table.resolved'), {
          icon: 'fa-check',
          position: 'bottom-right',
          duration: 1500,
        })
      }, 500)
    },
    search: debounce(function (term) {
      this.term = term
    }, 400),
    edit (user) {
      alert('Edit User: ' + JSON.stringify(user))
    },
    remove (user) {
      const idx = this.users.findIndex(u => u.id === user.id)
      this.users.splice(idx, 1)
    },
  },
  created () {
    db.collection('returned').get().then(
      querySnapshot => {
        querySnapshot.forEach(doc => {
          // console.log('type of doc.data(): ' + typeof doc.data())
          this.users.push(doc.data())
        })
      },
    )
  },
}
</script>

<style lang="scss">
</style>
