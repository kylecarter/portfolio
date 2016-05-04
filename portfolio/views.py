from django.http import *
from django.conf import settings
from django.shortcuts import render_to_response,redirect, render, get_object_or_404
from django.template import RequestContext
from django.views.generic import TemplateView

class HomeView(TemplateView):
    
    def get(self, request):
        data = {}
        data['keys'] = settings.API_KEYS
        return render(request, 'home/index.html', data)
    