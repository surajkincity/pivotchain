# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_project', '0002_leads_resume'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='leads',
            new_name='career',
        ),
        migrations.RenameField(
            model_name='career',
            old_name='website',
            new_name='name',
        ),
    ]
