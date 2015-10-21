from django.http import *
from django.shortcuts import render_to_response, redirect, render, get_object_or_404

def todos_list(request):
    todos = {}
    return render(request, 'todos/todos.html', {'todos': todos})
