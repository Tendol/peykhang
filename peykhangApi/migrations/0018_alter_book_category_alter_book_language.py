# Generated by Django 4.2.3 on 2023-11-17 20:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peykhangApi', '0017_alter_book_category_alter_book_language'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='category',
            field=models.CharField(choices=[('non_fiction', 'Non Fiction'), ('fiction', 'Fiction')], default='fiction', help_text='Select the book category'),
        ),
        migrations.AlterField(
            model_name='book',
            name='language',
            field=models.CharField(choices=[('tibetan', 'Tibetan'), ('italian', 'Italian'), ('english', 'English'), ('chinese', 'Chinese'), ('french', 'French'), ('hindi', 'Hindi'), ('spanish', 'Spanish')], default='tibetan', help_text='Selekc the book language'),
        ),
    ]
