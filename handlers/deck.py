""" Module: deck

The Deck.

"""
import tornado.web


class DeckHandler(tornado.web.RequestHandler):

    """ Display the Deck. """


    def get(self):
        """ Overload HTTP GET. """
        self.render("deck.html", xsrf_token=self.xsrf_token)
