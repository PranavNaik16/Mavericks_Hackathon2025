from rest_framework.decorators import api_view
from rest_framework.response import Response
import openai
import os


OPENAI_API_KEY = "sk-abcdefghij1234567890lmnopqrstuvwxyzABCD"

@api_view(["POST"])
def chatbot_response(request):
    """
    Handles chatbot interactions via OpenAI API.
    """
    try:
        user_message = request.data.get("message", "").strip()
        if not user_message:
            return Response({"error": "No message provided"}, status=400)

        
        client = openai.OpenAI(api_key=OPENAI_API_KEY)

      
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",  
            messages=[
                {"role": "system", "content": "You are a helpful assistant for college students and faculty."},
                {"role": "user", "content": user_message}
            ]
        )

        chatbot_reply = response.choices[0].message.content 
        return Response({"reply": chatbot_reply})

    except Exception as e:
        return Response({"error": str(e)}, status=500)
