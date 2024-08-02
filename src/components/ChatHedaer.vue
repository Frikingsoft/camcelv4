<template>
     
        <q-toolbar class="bg-grey-3 text-black">
          <q-btn
            round
            flat
            icon="keyboard_arrow_left"
            class="WAL__drawer-open q-mr-sm"
            @click="toggleLeftDrawer"
          />

          <q-btn round flat>
            <q-avatar>
              <img :src="usuario_elegido.avatar">
            </q-avatar>
          </q-btn>

          <span class="q-subtitle-1 q-pl-md">
            {{ currentConversation.person }}
          </span>

          <q-space/>
       
          <q-btn round flat icon="search" />
          <q-btn round flat>
            <q-icon name="attachment" class="rotate-135" />
          </q-btn>
          <q-btn round flat icon="more_vert">
            <q-menu auto-close :offset="[110, 0]">
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>Contact data</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Block</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Select messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Silence</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Clear messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Erase messages</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
            <q-btn dense flat icon="close" v-close-popup>
          <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-toolbar>
    
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref, computed,inject } from 'vue'
const usuario_elegido = inject("usuario_elegido")
console.log("el usuario es " + usuario_elegido)
const conversations = ([
  {
    id: 1,
    person: 'Razvan Stoenescu',
    avatar: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
    caption: 'I\'m working on Quasar!',
    time: '15:00',
    sent: true
  },
  {
    id: 2,
    person: 'Dan Popescu',
    avatar: 'https://cdn.quasar.dev/team/dan_popescu.jpg',
    caption: 'I\'m working on Quasar!',
    time: '16:00',
    sent: true
  },
  {
    id: 3,
    person: 'Jeff Galbraith',
    avatar: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
    caption: 'I\'m working on Quasar!',
    time: '18:00',
    sent: true
  },
  {
    id: 4,
    person: 'Allan Gaunt',
    avatar: 'https://cdn.quasar.dev/team/allan_gaunt.png',
    caption: 'I\'m working on Quasar!',
    time: '17:00',
    sent: true
  }
])



    const $q = useQuasar()

    const leftDrawerOpen = ref(false)
    const search = ref('')
    const message = ref('')
    const currentConversationIndex = ref(0)

    const currentConversation = computed(() => {
      return conversations[ currentConversationIndex.value ]
    })

    const style = computed(() => ({
      height: $q.screen.height + 'px'
    }))

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    function setCurrentConversation (index) {
      currentConversationIndex.value = index
    }
</script>

