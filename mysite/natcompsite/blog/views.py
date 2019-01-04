from django.shortcuts import render

# Create your views here.
def index(request):
    """View for home page"""

    return render(request, 'index.html')


def vectors(request):
    return render(request, 'vectors.html')



def forces(request):
    return render(request, 'forces.html')


def oscillations(request):
    return render(request, 'oscillations.html')


def particle_systems(request):
    return render(request, 'particle_systems.html')


def autonomous_agents(request):
    return render(request, 'autonomous_agents.html')


def cellular_automata(request):
    return render(request, 'cellular_automata.html')


def fractals(request):
    return render(request, 'fractals.html')


def evolutionary_algorithms(request):
    return render(request, 'evolutionary_algorithms.html')


def neural_nets(request):
    return render(request, 'neural_nets.html')


def hello_three_js(request):
    return render(request, 'hello_three_js.html')
