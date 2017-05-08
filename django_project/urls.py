"""django_project URL Configuration

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
from answers import views,urls
from django_project.views import home,about,services,hire,contact,blog,career,contacted


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', home , name='home'),
    url(r'^about-pivotchain/$', about , name='about'),
    url(r'^blockchain-services/$', services , name='services'),
    url(r'^work-with-pivotchain/$', hire , name='hire'),
    url(r'^contact-us/$', contact , name='contact'),
    url(r'^contacted/$', contacted , name='contacted'),

    url(r'^work-at-pivotchain/$', career , name='career'),
    url(r'^blog/', include('answers.urls', namespace="answers")),



]
