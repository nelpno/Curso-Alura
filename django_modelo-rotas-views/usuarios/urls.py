from django.urls import path

from usuarios.views import cadastro, login, dashboard, logout, cria_receita

urlpatterns = [
    path('cadastro', cadastro, name='cadastro'),
    path('login', login, name='login'),
    path('dashboard', dashboard, name='dashboard'),
    path('logout', logout, name='logout'),
    path('cria/receita', cria_receita, name='cria_receita')
]