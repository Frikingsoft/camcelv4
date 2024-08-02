    <template>
     
        
    

        <q-toolbar class="bg-grey-3">
          <q-avatar class="cursor-pointer">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>

          <q-space />

          <q-btn round flat icon="message" />
          <q-btn round flat icon="more_vert">
            <q-menu auto-close :offset="[110, 8]">
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>Nuevo Grupo</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Perfil</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Archivado</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Favoritos</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Configuracion</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Cerrar Sesion</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

      
        </q-toolbar>

        <q-toolbar class="bg-grey-2">
          <q-input rounded outlined dense class="WAL__field full-width" bg-color="white" v-model="search" placeholder="Search or start a new conversation">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar>

        <q-scroll-area style="height: calc(100% - 100px)">
          <q-list>
            <q-item
              v-for="(chat, index) in chats"
              :key="chat.id"
              clickable
              v-ripple
              @click="setCurrentConversation(index)"
            >
              <q-item-section avatar>
                <q-avatar>
                  <img :src="chat.avatar">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">
                  {{ chat.person }}
                </q-item-label>
                <q-item-label class="conversation__summary" caption>
                  <q-icon name="check" v-if="chat.sent" />
                  <q-icon name="not_interested" v-if="chat.deleted" />
                  {{ chat.caption }}
                </q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label caption>
                  {{ chat.time }}
                </q-item-label>
                <q-icon name="keyboard_arrow_down" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      
    </template>


<script setup>
import { useQuasar } from 'quasar';
import { ref, computed, inject } from 'vue';
import chatData from './chat.json';
const usuario_elegido = inject("usuario_elegido")
const chats = ref(chatData)


    const $q = useQuasar()

    const leftDrawerOpen = ref(false)
    const search = ref('')
    const message = ref('')
    const currentConversationIndex = ref(0)

    const currentConversation = computed(() => {
      alert("hola")
      return chats[ currentConversationIndex.value ]
    })

    const style = computed(() => ({
      height: $q.screen.height + 'px'
    }))

    function toggleLeftDrawer () {
      
      leftDrawerOpen.value = !leftDrawerOpen.value
      
    }

    function setCurrentConversation (index) {
      usuario_elegido.push(chatData[index]) 
      currentConversationIndex.value = index
     
      
    }
   
</script>

