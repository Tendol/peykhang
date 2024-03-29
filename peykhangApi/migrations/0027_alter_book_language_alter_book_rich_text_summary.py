# Generated by Django 4.2.3 on 2023-11-18 21:47

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peykhangApi', '0026_alter_book_language_alter_book_rich_text_summary'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='language',
            field=models.CharField(choices=[('hindi', 'Hindi'), ('english', 'English'), ('spanish', 'Spanish'), ('tibetan', 'Tibetan'), ('italian', 'Italian'), ('french', 'French'), ('chinese', 'Chinese')], default='tibetan', help_text='Selekc the book language'),
        ),
        migrations.AlterField(
            model_name='book',
            name='rich_text_summary',
            field=ckeditor.fields.RichTextField(null=True),
        ),
    ]
