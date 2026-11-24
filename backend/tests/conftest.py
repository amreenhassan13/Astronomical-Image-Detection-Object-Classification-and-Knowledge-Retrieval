"""Runs before every test, so tests behave the same on every computer,
whatever backend/.env contains:
  - hides the Google API key, so tests never call the real Gemma
  - replaces the CLIP gate with a demo one that ALWAYS says "astronomical",
    so the rest of the pipeline runs in every test. (The plain demo gate
    decides from the image's hash, so about half of test images would be
    stopped at the gate. Tests of the gate itself are in test_clip_gate.py.)
"""

import numpy as np
import pytest

from adastra import clip as clip_mod
from adastra.config import settings


class AlwaysAstronomicalClip(clip_mod.DemoClip):
    """Demo CLIP whose gate always passes. Gate order is
    [astronomical, non_astronomical], so the first logit wins."""

    def gate_logits(self, embedding, image_sha256):
        return np.array([6.0, -6.0])


@pytest.fixture(autouse=True)
def isolated(monkeypatch):
    monkeypatch.delenv("GOOGLE_API_KEY", raising=False)
    monkeypatch.delenv("GEMINI_API_KEY", raising=False)
    # Never load the real CLIP artifact in tests, even if it is on this computer.
    monkeypatch.setattr(clip_mod, "_model", AlwaysAstronomicalClip(settings.class_names))
