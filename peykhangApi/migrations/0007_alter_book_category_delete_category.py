# Generated by Django 4.2.3 on 2023-09-23 21:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peykhangApi', '0006_book_category_remove_book_author_book_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='category',
            field=models.CharField(choices=[('fiction', 'Fiction'), ('non_fiction', 'Non Fiction')], default='fiction', help_text='Select a book category'),
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
