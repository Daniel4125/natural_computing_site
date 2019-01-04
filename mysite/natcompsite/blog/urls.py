from django.urls import path
from blog import views


urlpatterns = [
    path('', views.index, name='index'),
    path('vectors/', views.vectors, name='vectors'),
    path('forces/', views.forces, name='forces'),
    path('oscillations/', views.oscillations, name='oscillations'),
    path('particle_systems/', views.particle_systems, name='particle_systems'),
    path('autonomous_agents/', views.autonomous_agents, name='autonomous_agents'),
    path('cellular_automata/', views.cellular_automata, name='cellular_automata'),
    path('fractals/', views.fractals, name='fractals'),
    path('evolutionary_algorithms/', views.evolutionary_algorithms, name='evolutionary_algorithms'),
    path('neural_nets/', views.neural_nets, name='neural_nets'),
    path('hello_three_js/', views.hello_three_js, name='hello_three_js')
    
]
