from django.db import models
import json
from pathlib import Path


class Genre(models.Model):
    """Model representing a book genre."""

    label = models.CharField(
        max_length=200, help_text="Enter a book genre (e.g. Science Fiction)"
    )

    def save(self, *args, **kwargs):
        if Genre.objects.filter(label=self.label).exists():
            raise ValueError(f"Genre label {self.label} already exists")

        super().save(*args, **kwargs)
        return

    def __str__(self):
        """String for representing the Model object."""
        return self.label


class Book(models.Model):
    """Model representing a book (but not a specific copy of a book)."""

    title = models.CharField(max_length=200)

    author = models.ManyToManyField("Author", help_text="Select the book author")

    summary = models.TextField(
        max_length=1000, null=True, help_text="Enter a brief description of the book"
    )
    isbn = models.CharField(
        "ISBN",
        max_length=13,
        unique=True,
        null=True,
        help_text='13 Character <a href="https://www.isbn-international.org/content/what-isbn">ISBN number</a>',
    )

    # ManyToManyField used because genre can contain many books. Books can cover many genres.
    # Genre class has already been defined so we can specify the object above.
    genre = models.ManyToManyField(Genre, help_text="Select a genre for this book")

    # A book can either be fiction or non fiction
    categories = {("fiction", "Fiction"), ("non_fiction", "Non Fiction")}

    category = models.CharField(
        choices=categories,
        help_text="Select the book category",
        default="fiction",
    )

    """ Getting list of languages from config/settings.json file """
    path = Path(__file__).parent / "../src/config/settings.json"
    with open(path) as settings:
        file_contents = json.load(settings)

        """convert the json list to set of tuples """
        languages = {(k, v) for k, v in file_contents["languages"].items()}

    language = models.CharField(
        choices=languages, help_text="Selekc the book language", default="tibetan"
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.title

    def get_absolute_url(self):
        """Returns the URL to access a detail record for this book."""
        return reverse("book-detail", args=[str(self.id)])


class Author(models.Model):
    """Model representing an author."""

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField("Died", null=True, blank=True)

    class Meta:
        ordering = ["last_name", "first_name"]

    def get_absolute_url(self):
        """Returns the URL to access a particular author instance."""
        return reverse("author-detail", args=[str(self.id)])

    def __str__(self):
        """String for representing the Model object."""
        return f"{self.last_name}, {self.first_name}"
