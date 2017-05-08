from django import forms

from .models import newsletter,career,contact


class contactform(forms.ModelForm):
    class Meta:
        model = contact
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Name'}),
            'email': forms.TextInput(attrs={'placeholder': 'Email'}),
            'message': forms.Textarea(
                attrs={'placeholder': 'Type your message'}),

        }
        fields = ('name' , 'email' , 'message')



    


class leadsform(forms.ModelForm):
    class Meta:
        model = career
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Name'}),
            'email': forms.TextInput(attrs={'placeholder': 'Email'}),
      

        }
        
        fields = ('name','email','resume')


class newsletterform(forms.ModelForm):
    class Meta:
        model = newsletter
        fields = ('email',)

