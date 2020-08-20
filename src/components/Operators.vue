<template>
  <va-card title="Operators">
    <div class="row align--center mb-1">
      <div class="flex xs12 sm6">
        <va-input
          class="ma-0"
          :value="term"
          placeholder="Search by operator ID"
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
        name: 'operator_id',
        title: 'Operator ID',
        width: '10%',
        sortField: 'operator_id',
      }, {
        name: 'operator_name',
        title: 'Operator name',
        width: '15%',
        sortField: 'operator_name',
      }, {
        name: 'operator_address',
        title: 'Operator address',
        width: '25%',
        sortField: 'operator_address',
      }, {
        name: 'operator_city',
        title: 'Operator city',
        width: '10%',
        sortField: 'operator_city',
      }, {
        name: 'operator_phone_number',
        title: 'Operator phone number',
        width: '15%',
        sortField: 'operator_phone_number',
      }, {
        name: 'operator_is_joestar',
        title: 'Operator is Joestar?',
        width: '5%',
        sortField: 'operator_is_joestar',
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
        return item.operator_id.toLowerCase().startsWith(this.term.toLowerCase())
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
    db.collection('operators').get().then(
      querySnapshot => {
        querySnapshot.forEach(doc => {
          this.users.push(doc.data())
        })
      },
    )
  },
}
</script>

<style lang="scss">
</style>
