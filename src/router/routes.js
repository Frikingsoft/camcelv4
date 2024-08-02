const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Empresas.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/error/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ErrorNotFound.vue') }
    ]
  },
  {
    path: '/log/',
    component: () => import('pages/InicioSesion.vue'),
    
  },
  {
    path: '/reg/',
    component: () => import('pages/Registro.vue'),
    
  },
  {
    path: '/uno/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Documentos.vue') }
    ]
  },
  {
    path: '/documentos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Documentos.vue') }
    ]
  },
  {
    path: '/empresas/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Empresas.vue') }
    ]
  },
  {
    path: '/his.trabajo/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/HisTrabajo.vue') }
    ]
  }, {
    path: '/cuenta/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Documentos.vue') }
    ]
  }, {
    path: '/calendario/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Calendario.vue') }
    ]
  }, {
    path: '/soporte/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Soporte.vue') }
    ]
  },

]

export default routes

