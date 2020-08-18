<template>
  <va-card title="Most recently deployed">
    <div class="row align--center mb-1">
      <div class="flex xs12 sm6">
        <va-input
          class="ma-0"
          :value="term"
          :placeholder="$t('tables.searchByName')"
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
      <template slot="icon">
        <va-icon name="fa fa-user" color="secondary" />
      </template>
      <template v-slot:starred="props">
        <va-icon
          v-if="props.rowData.starred"
          name="fa fa-star"
          color="warning"
        />
      </template>
      <template v-slot:status="props">
        <va-badge :color="getStatusColor(props.rowData.status)">
          {{ props.rowData.status }}
        </va-badge>
      </template>
    </va-data-table>
  </va-card>
</template>

<script>
import debounce from 'lodash/debounce'
// import data from '../markup-tables/data.json'
import db from './../../firestore/firebaseInit'

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
        name: 'reservation_id',
        title: 'reservation id',
        width: '10%',
        sortField: 'reservation_id',
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
    detailedFields () {
      return [{
        name: '__slot:icon',
        width: '30px',
        dataClass: 'text-center',
      }, {
        name: 'name',
        title: this.$t('tables.headings.name'),
        width: '20%',
        sortField: 'name',
      }, {
        name: 'email',
        title: this.$t('tables.headings.email'),
        width: '20%',
      },
      {
        name: 'country',
        title: this.$t('tables.headings.location'),
        with: '100%',
      },
      {
        name: '__slot:starred',
        width: '20px',
      },
      {
        name: '__slot:status',
        title: this.$t('tables.headings.status'),
        width: '100%',
        sortField: 'status',
      },
      {
        name: '__slot:actions',
        dataClass: 'text-right',
      }]
    },
    modeOptions () {
      return [{
        value: 0,
        label: this.$t('dashboard.table.brief'),
      }, {
        value: 1,
        label: this.$t('dashboard.table.detailed'),
      }]
    },
    filteredData () {
      if (!this.term || this.term.length < 1) {
        return this.users
      }

      return this.users.filter(item => {
        return item.name.toLowerCase().startsWith(this.term.toLowerCase())
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
          console.log('type of doc.data(): ' + typeof doc.data())
          if (doc.data().pickup_date.split('-')[1] >= 2) {
            console.log('yay accepted')
            this.users.push(doc.data())
            // add to users
          }
        })
      },
    )
  },
}
</script>

<style lang="scss">
</style>
