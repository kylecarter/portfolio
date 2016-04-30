"""portfolio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from . import views
from .views import HomeView

urlpatterns = [
    url(r'^$', HomeView.as_view(), name='home'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^djrichtextfield/', include('djrichtextfield.urls')),
    url(r'^api/', include('api.urls')),
    url(r'^docs/', include('blog.urls')),
    # url(r'^accounts/login/$', LoginView.as_view(), name='login_user'),
    # url(r'^accounts/logout/', views.logout_user, name='logout_user'),
    # url(r'^register/', views.register_user, name='register_user'),
    # url(r'^todos/', include('todo.urls')),

    # Test URLs remove before sending to production
]
