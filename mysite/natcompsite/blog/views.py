from django.shortcuts import render

# Create your views here.
def index(request):
    """View for home page"""

    return render(request, 'index.html')