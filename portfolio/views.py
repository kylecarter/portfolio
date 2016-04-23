from django.http import *
from django.shortcuts import render_to_response,redirect, render, get_object_or_404
from django.template import RequestContext
from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = 'home/index.html'
