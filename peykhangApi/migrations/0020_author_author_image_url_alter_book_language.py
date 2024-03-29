# Generated by Django 4.2.3 on 2023-11-18 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peykhangApi', '0019_rename_author_book_authors_alter_book_language'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='author_image_url',
            field=models.CharField(blank=True, help_text='Author Image URL', null=True),
        ),
        migrations.AlterField(
            model_name='book',
            name='language',
            field=models.CharField(choices=[('english', 'English'), ('spanish', 'Spanish'), ('chinese', 'Chinese'), ('hindi', 'Hindi'), ('italian', 'Italian'), ('french', 'French'), ('tibetan', 'Tibetan')], default='tibetan', help_text='Selekc the book language'),
        ),
    ]
