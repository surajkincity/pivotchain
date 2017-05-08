# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_project', '0003_auto_20170508_0708'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='career',
            new_name='leads',
        ),
        migrations.RenameField(
            model_name='leads',
            old_name='name',
            new_name='website',
        ),
    ]
