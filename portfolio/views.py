from django.http import *
from django.shortcuts import render_to_response,redirect, render, get_object_or_404
from django.template import RequestContext
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout


def logout_user(request):
    logout(request)
    return render_to_response('authentication/logout.html')


class HomeView(TemplateView):
    template_name = 'home/index.html'


class LoginView(TemplateView):

    def get(self, request, *args, **kwargs):
        next = request.GET.get('next', '')
        return render_to_response('authentication/login.html', context_instance=RequestContext(request, {'next': next}))

    def post(self, request, *args, **kwargs):
        username = password = next = ''
        
        username = request.POST['username']
        password = request.POST['password']
        next = request.POST['next']

        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return HttpResponseRedirect(next)
    

