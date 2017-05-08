from django.contrib import admin

# Register your models here.

from .models import career,newsletter,contact


admin.site.register(career)
admin.site.register(newsletter)
admin.site.register(contact)

