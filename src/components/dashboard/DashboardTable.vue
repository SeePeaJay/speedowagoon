<template>
  <va-card title="Most recently deployed">
    <div class="row align--center mb-1">
      <div class="flex xs12 sm6">
        <va-input
          class="ma-0"
          :value="term"
          placeholder="Search by operator name"
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
    >
    </va-data-table>
  </va-card>
</template>

<script>
import debounce from 'lodash/debounce'
import db from './../../firestore/firebaseInit'
import _ from 'lodash'

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
        name: 'deployment_id',
        title: 'deployment id',
        width: '10%',
        sortField: 'deployment_id',
      }, {
        name: 'vehicle_id',
        title: 'vehicle id',
        width: '10%',
        sortField: 'vehicle_id',
      }, {
        name: 'operator_id',
        title: 'opearator id',
        width: '10%',
        sortField: 'operator_id',
      }, {
        name: 'operator_name',
        title: 'operator name',
        width: '20%',
        sortField: 'operator_name',
      }, {
        name: 'pickup_date',
        title: 'pickup date',
        width: '10%',
        sortField: 'pickup_date',
      }, {
        name: 'branch_id',
        title: 'branch id',
        width: '10%',
        sortField: 'branch_id',
      }, {
        name: 'return_date',
        title: 'return date',
        width: '10%',
        sortField: 'return_date',
      }]
    },
    filteredData () {
      if (!this.term || this.term.length < 1) {
        return this.users
      }

      return this.users.filter(item => {
        return item.operator_name.toLowerCase().startsWith(this.term.toLowerCase())
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
  },
  created () {
    db.collection('deployed').get().then(
      querySnapshot => {
        querySnapshot.forEach(doc => {
          // console.log('type of doc.data(): ' + typeof doc.data())
          if (doc.data().pickup_date.split('-')[1] >= 2) {
            const condensedData = _.pick(doc.data(), ['deployment_id', 'vehicle_id', 'operator_id', 'operator_name', 'pickup_date', 'branch_id', 'return_date'])
            this.users.push(condensedData)
          }
        })
      },
    )
  },
}
</script>

<style lang="scss">
</style>
