from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .forms import contactform,newsletterform,leadsform
from django.core.mail import EmailMessage
from django.shortcuts import redirect
from django.template import Context
from django.template.loader import get_template
from django.core.mail import send_mail
from django.core.mail import EmailMessage
from django.core.mail import send_mail
import answers.models



def home(request):  
  if request.method == "POST":
    
    
      
    if "contact" in request.POST:
      message = 'Thanks! We will get back to you shortly.'
      message1 = ''
      display = 'none'
      displaya = 'block'  
      form = contactform(request.POST)
      if form.is_valid():
       post = form.save(commit=False)
       post.save()           
    if "resume" in request.POST:
      message1 = 'Thanks! We will get back to you shortly.'
      message = ''
      form = leadsform(request.POST, request.FILES)
      if form.is_valid():
        displaya = 'none'
        display = 'block'
        post = form.save(commit=False)
        post.save()
      else:
        return render(request, 'about.html', )
    return render(request, 'home.html', { 'display' :display , 'displaya' :displaya , 'message' :message ,'message1' :message1  })    
  else:
    message = ''
    message1 = ''
    display = 'block'
    displaya = 'block'
    form = contactform()
    form1 = leadsform()
    return render(request, 'home.html', {'form': form, 'display' :display ,'displaya' :displaya , 'message' :message,'message1' :message1, 'form1' :form1 })
 
def resume(request):  
  if request.method == "POST":
    message = 'Thanks! We will get back to you shortly.'
    displaya = 'none'
    display = 'none'    
    form = leadsform(request.POST,request.FILES)

    if form.is_valid():
        post = form.save(commit=False)
        post.save()
    else:
        return render(request, 'about.html', )
    return render(request, 'resume.html', { 'display' :display , 'displaya' :displaya , 'message' :message  })    
  else:
    message = ''
    display = 'block'
    form = leadsform()
    return render(request, 'resume.html', {'form': form, 'display' :display , 'message' :message,})




def contacted(request):
    comments = contact.objects.all()
    return render(request, 'contacted.html',{
                  'comments' :comments
                  } )

def about(request):
    return render(request, 'about.html', )
def services(request):
    return render(request, 'services.html', )
def hire(request):
    return render(request, 'hire.html', )
def contact(request):
    return render(request, 'contact.html', )

   




def career(request):
  if request.method == "POST":
    form = contactform(request.POST)
    if form.is_valid():
      post = form.save(commit=False)
      post.save()
      message = 'Thanks! We will get back to you shortly.'
      form = ' '
      display = 'none'

      return render(request, 'career.html', {'form': form, 'display' :display , 'message' :message})
    
  else:
    message = ''
    display = 'block'
    form = contactform(initial={'message': 'Your Message','email' : 'Email','name' :'Name'})
    return render(request, 'career.html', {'form': form, 'display' :display , 'message' :message})  

def blog(request):
    return render(request, 'blog.html', )




