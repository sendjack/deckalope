""" Module: urls

URLs for the Tornado handlers.

"""
from handlers.deck import DeckHandler


url_patterns = [
        (r"/", DeckHandler),
        (r"/deck", DeckHandler),
        (r"/deck/", DeckHandler),
        ]
