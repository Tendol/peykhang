# Generated by Django 4.2.3 on 2023-11-17 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peykhangApi', '0018_alter_book_category_alter_book_language'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='author',
            new_name='authors',
        ),
        migrations.AlterField(
            model_name='book',
            name='language',
            field=models.CharField(choices=[('tibetan', 'Tibetan'), ('french', 'French'), ('hindi', 'Hindi'), ('spanish', 'Spanish'), ('chinese', 'Chinese'), ('english', 'English'), ('italian', 'Italian')], default='tibetan', help_text='Selekc the book language'),
        ),
    ]
