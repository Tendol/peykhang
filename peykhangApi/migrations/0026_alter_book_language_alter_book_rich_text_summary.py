# Generated by Django 4.2.3 on 2023-11-18 21:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peykhangApi', '0025_alter_book_category_alter_book_language'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='language',
            field=models.CharField(choices=[('italian', 'Italian'), ('tibetan', 'Tibetan'), ('hindi', 'Hindi'), ('french', 'French'), ('spanish', 'Spanish'), ('english', 'English'), ('chinese', 'Chinese')], default='tibetan', help_text='Selekc the book language'),
        ),
        migrations.AlterField(
            model_name='book',
            name='rich_text_summary',
            field=models.TextField(null=True),
        ),
    ]
