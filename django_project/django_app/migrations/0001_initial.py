# Generated by Django 5.1.3 on 2024-12-03 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_base64', models.TextField()),
                ('description', models.TextField()),
            ],
        ),
    ]
